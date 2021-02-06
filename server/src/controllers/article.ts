import model from '../models/article';

class Article {
  static async getAllArticle(req, res, next) {
    try {
      const [articles] = await model.findAll();
      return res
        .status(200)
        .send({ message: '게시글의 목록입니다.', result: articles });
    } catch (error) {
      console.error(error);
      return res.status(401).send({
        message: '게시글 정보를 가져오는 데에서 오류가 발생하였습니다.',
      });
    }
  }

  static async getOneArticle(req, res, next) {
    try {
      const { ARTICLE_ID } = req.params;
      const [articles] = await model.findAllWhere(ARTICLE_ID);
      return res.status(200).send({
        message: '특정 게시글입니다.',
        result: articles,
      });
    } catch (error) {
      console.error(error);
      return res.status(401).send({
        message: '특정 게시글을 가져오는 데에 실패하였습니다.',
      });
    }
  }

  static async createOneArticle(req, res, next) {
    try {
      const { TITLE, PROJECT_ID, CONTENTS, ADMIN_ID } = await req.body;
      if (!TITLE) {
        return res.status(401).send({ message: '제목을 다시 확인해주세요.' });
      }
      if (!PROJECT_ID) {
        return res
          .status(401)
          .send({ message: '프로젝트 ID를 다시 확인해주세요.' });
      }
      if (!ADMIN_ID) {
        return res
          .status(401)
          .send({ message: '관리자 ID를 다시 확인해주세요.' });
      }

      const newArticle = await model.create({
        PROJECT_ID,
        TITLE,
        CONTENTS,
        ADMIN_ID,
      });

      return res.status(201).send({
        message: '해당 프로젝트에 게시글을 등록하는 데에 성공하였습니다.',
        result: newArticle,
      });
    } catch (error) {
      console.error(error);
      return res.status(401).send({ message: '게시글 생성에 실패하였습니다.' });
    }
  }

  static async deleteOneArticle(req, res, next) {
    try {
      const { ARTICLE_ID } = await req.params;
      await model.destroy(ARTICLE_ID);
      return res.status(200).send({ message: '게시글이 삭제되었습니다.' });
    } catch (error) {
      console.error(error);
      return res.status(401).send({ message: '게시글 삭제에 실패하였습니다.' });
    }
  }
}

export default Article;
