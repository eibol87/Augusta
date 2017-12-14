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

      this.props.customerActions.resetStateCustomerEdited()

      throw e

  }

}