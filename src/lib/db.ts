import { Pool } from "pg";

const pool = new Pool({
  user: "admin", // mesmo nome de usuário do contêiner
  host: "localhost", // ou o nome do contêiner se estiver em rede com o app
  database: "admin", // nome do banco de dados
  password: "admin", // senha definida no contêiner
  port: 5432, // porta padrão do PostgreSQL
});

export default pool;
