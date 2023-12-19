import prisma from "@/lib/db";

const customer = prisma?.customer.fields;
let token = [];

/*Script para tratar o cnpj*/

export const findClienteBase = async () => {
  return prisma.unique
    .findMany({
      orderBy: {
        cnpj: "asc",
      },
      select: {
        id: true,
        cnpj: true,
      },
    })
    .then((res) => {
      return res;
    });
};
export const findCnpjBase = async (id: string) => {
  return prisma.unique
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((res) => {
      return res;
    });
};

export const findCliente = async () => {
  return prisma.customer
    .findMany({
      orderBy: {
        nome: "asc",
      },
      select: {
        id: true,
        nome: true,
      },
    })
    .then((res) => {
      return res;
    });
};
export async function deleteCnpj(id: string) {
  // const db = await connect();
  // try {
  //   return db.collection("baseCnpj").deleteOne({ _id: id });
  // } catch (e) {
  //   console.log(e);
  // }
}

export const getAllClientes = () => {
  return prisma.customer.findMany({
    orderBy: {
      nome: "asc",
    },
    select: {
      id: true,
      nome: true,
    },
  });
};

export const getToken = () => {
  return prisma.customer.findMany({
    orderBy: {
      nome: "asc",
    },
    select: {
      id: true,
      nome: true,
    },
  });
};

export const getById = (id: string) => {
  try {
    const dados = prisma.customer.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nome: true,
      },
    });
    return dados.then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateById = (id: string) => {
  console.log("id-serviço: ", id);
  try {
    const dados = prisma.customer.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nome: true,
      },
    });
    return dados.then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteById = (id: string) => {
  try {
    const dados = prisma.customer.findUnique({
      where: {
        id,
      },
    });
    return dados.then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
