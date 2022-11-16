import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config"; 

export  function useDeleteDoc(){

   async function handleDelete(e:any, docId:string, docColection:string){
    e.preventDefault();

    await deleteDoc(doc(db, docColection, docId));
   }
       return handleDelete
}