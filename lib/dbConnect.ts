import mongoose from "mongoose";
type ConnectionObject = {
  isConnected: boolean;
};
const connection: ConnectionObject = {
    isConnected: false
};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to DB!");
    return;
  }
  try {
    const db =  await mongoose.connect(process.env.MONGODB_URL || "");
    connection.isConnected = true;
    console.log("Connection is established!");
    
  } catch (error) {
    if(error){
        connection.isConnected = false;
    }
    console.log(error);
    
  }
  
}

export default dbConnect;

