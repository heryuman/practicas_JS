import { request } from "express";
import { restart } from "nodemon";
import { getConnection,sql,quieries} from "../database"; // estas importaciones se realizan mediante el index.js que esta en database


export const getProducts=async (req,res)=> {
    try {
        
        const pool = await getConnection();// llamo a la conexion que me retorna el pool
        const result =await pool.request().query(quieries.getAllProducts);// con el pool hace la peticion en lo que termina de hacer la consulta lo almacen a en result por eso se le agrega await
        console.log(result);
        res.json(result.recordset);

    } catch (error) {

        restart.status(500);
        res.send(error.message);
        
    }
};

export const createNewProduct= async(req,res) => {
    const {name,description}= req.body
    let {quantity}=req.body

    

    if (name==null || description == null){
        return res.status(400).json({msg:'Bad request, please fill all fields'})
    }

    if (quantity== null)quantity=0;

    try {

        
        const pool = await getConnection();
        pool
        .request()
        .input("name",sql.VarChar,name)
        .input('description',sql.Text,description)
        .input('quatity',sql.Int,quantity)
        .query(quieries.addNewProduct);

        // console.log(name,description)
        res.json({name,description,quantity});
        
    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }


};

export const getProductById = async( req, res)=>{

    const {id} =req.params

    const pool= await getConnection()
    const result=await pool
    .request()
    .input("Id",id)
    .query(quieries.getProductById)
    console.log(result.recordset[0]);
res.json(result.recordset[0]);
}



export const deleteProductById = async( req, res)=>{

    const {id} =req.params

    const pool= await getConnection()
    const result=await pool
    .request()
    .input("Id",id)
    .query(quieries.deleteProduct)

res.sendStatus(204);
};


export const getTotalProducts = async( req, res)=>{


    const pool= await getConnection()
    const result=await pool
    .request()

    .query(quieries.getTotalProducts)
    console.log(result);

res.json(result.recordset[0][''])



};


export const updateProductById = async (req,res)=>{

    const {name,description,quantity}=req.body;
    const {id}=req.params
    if(name== null || description==null, quantity ===null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"});

    }

    const pool = await getConnection();
    await pool
    .request()
    .input("name",sql.VarChar,name)
    .input("description",sql.Text,description)
    .input("quatity",sql.Int,quantity)
    .input("Id",sql.Int,id)
    .query(quieries.updateProductsById);

    res.json({name,description,quantity});
    

    
};