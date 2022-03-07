export const quieries={

    getAllProducts:"SELECT * FROM Products",
    addNewProduct:'INSERT INTO Products (name,description,quatity) VALUES (@name,@description, @quatity)',
    getProductById:'SELECT * FROM  Products Where Id=@Id',
    deleteProduct:'DELETE FROM [webstore].[dbo].[Products] WHERE Id=@Id',
    getTotalProducts:'SELECT COUNT(*) FROM Products',
    updateProductsById:'UPDATE Products SET Name=@name,Description=@description,@Quatity=@quatity WHERE Id =@Id'
}