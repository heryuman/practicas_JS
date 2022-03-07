import sql from 'mssql'
import config from '../config';
const dbsettings={
    user:config.dbUser,//dbtest
    password:config.dbPassword,//marielitos
    server:config.dbSErver,
    database:config.dbDatabase,
    options:{
        encryp:true,// para azure
        trustServerCertificate:true, // cambia a true para desarrollo local /self-signed certs
    }

};

export async function getConnection(){

   try {
    const pool= await  sql.connect(dbsettings);
    //const result= await pool.request().query("SELECT 1");
    //console.log(result);

    return pool;
   } catch (error) {
       console.error(error);
       
   }
}

export {sql};