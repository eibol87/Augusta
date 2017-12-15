import toastr from 'toastr'

export async function updateCell(dataEdited,cellName,data,updateCustomer) {

  const body = {};
  const findDataRowEdited = data.filter(element => element.id === dataEdited.id )
    
  body[cellName] = findDataRowEdited[0][cellName]
    
  try {

    const result = await updateCustomer(dataEdited.id,body)
      
    if(result) toastr.success( `${body[cellName]}`,'Se ha guardado:')
  
  }
    catch(e) {

      toastr.error('Error al resolver la promesa')

      throw e

  }

}

export async function onAfterInsertRow(row){
    // delete row.id //delete id because if not needed pass to mongodb
    // row.phone= Number(row.phone)
    // row.type='particular'
    // const result = await createCustomer(row)
    // if(result === 200) toastr.success(`Se ha añadido el cliente ${row.contact}`)
    // this.getCustomers()
  }