import toastr from 'toastr'

export async function updateCell(dataEdited,cellName,data,updateCustomer) {

  const body = {};
  const findDataRowEdited = data.filter(element => element.id === dataEdited.id )
  
  if(findDataRowEdited.length !== 0){
    body[cellName] = findDataRowEdited[0][cellName]
      
    try {

      const result = await updateCustomer(dataEdited.id,body)
        
      if(result) toastr.success( `${body[cellName]}`,'Se ha guardado:')
    
    }
      catch(e) {

        toastr.error('Error al resolver la promesa')

        throw e

    }
  }else{
    toastr.error('No se ha guardado el cambio')
  }
}

export async function onAfterInsertRow(row,createCustomer,typeCustomer=null){
    
    delete row.id //delete id because if not needed pass to mongodb
    
    row.phone= Number(row.phone)
    row.type=typeCustomer
    
    if(row.delivery_type === 'No'){

      row.delivery_type = false
      row.delivery_days = ''

    }

    const result = await createCustomer(row)
    
    if(result.type === "CREATE_CUSTOMER_SUCCESS"){

      toastr.success(`Se ha añadido el cliente ${row.contact}`)
    }

    return result.type
   
  }