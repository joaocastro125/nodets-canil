
type optionMenu='' | 'all' | 'dog' | 'cat' | 'fish';


export const menuObject=(activeMenu:optionMenu)=>{
   let returnObject={
       all:false,
       dog:false,
       cat:false,
       fish:false
   }
   if(activeMenu !== ''){
       returnObject[activeMenu]=true;
   }

   return returnObject
      
  
}