import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

class MovieController {
  async index(req, res) {
    try {
      const movies = await prisma.movies.findMany();

      return res.status(200).json({
        status: true,
        message: "Success get all movie",
        movies,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async store(req, res) {
    try {
      let { title, year } = req.body;

      if (!title) {
        throw { code: 400, message: "The field title is required." };
      }
      if (!year) {
        throw { code: 400, message: "The field year is required." };
      }

      const movie = await prisma.movies.create({
        data: {
          title,
          year,
        },
      });

      return res.status(201).json({
        status: true,
        message: "Success create movie",
        movie,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const movie = await prisma.movies.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!movie) {
        throw { code: 404, message: "Movie not found" };
      }

      return res.status(200).json({
        status: true,
        message: "Success get movie",
        movie,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { title, year } = req.body;
      const { id } = req.params;

      if (!title) {
        throw { code: 400, message: "The field title is required." };
      }
      if (!year) {
        throw { code: 400, message: "The field year is required." };
      }

      const exists = await prisma.movies.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!exists) {
        throw { code: 404, message: "Movie not found" };
      }

      const movie = await prisma.movies.update({
        where: {
          id: Number(id),
        },
        data: {
          title,
          year,
        },
      });

      return res.status(200).json({
        status: true,
        message: "Success update movie",
        movie,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const exists = await prisma.movies.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!exists) {
        throw { code: 404, message: "Movie not found" };
      }

      const movie = await prisma.movies.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json({
        status: true,
        message: "Success delete movie",
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }
}

export default new MovieController();
