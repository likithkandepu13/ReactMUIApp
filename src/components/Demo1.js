import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Demo1() 
{
    const [pname,setPname] = useState("")
    //where pname is product name & state variable
    const [productlist,setProductlist] = useState([])

        const handlepnameinput = (event) => {
            //console.log(event.target.value)
            setPname(event.target.value)
        }

        const addProduct = () =>
        { if(pname.length >0)
            {
            //spread operator
            //here pname will be merged with product list where ... productlist will make array into individual elements
            //console.log("Before:"+productlist)
            setProductlist([...productlist,pname]) //using the spread operator 
            setPname("")
            //console.log("After:"+productlist)
            }
            else{
                alert("please enter product name")
                document.getElementById("pname").focus() //to focus an element
                
            }
        }

  return (
    <div>
        <h3 >Product List</h3>

    <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField id="pname" label="Enter Product Name" variant="outlined" value={pname} onChange={handlepnameinput} required/>
    </Box>
        {/* <input   value={pname} onChange={handlepnameinput}></input> */}
        {/* <button  onClick={addProduct} >Add Product</button>  from material ui we are getting the all */}
        <Stack spacing={1} direction="row">
        <Button variant="contained" onClick={addProduct}>Add Product</Button>
        <br/>
        <br/>
        </Stack>
        {
            productlist.map( (product,index) => (
                <table border={1} bgcolor='lightgrey' width="15%" height="15%" >
                    <tr key={index} >
                        <td>{index+1}.</td>
                        <td>{product}</td>
                    </tr>
                </table>
            ))
        }
        <br/><br/>
    </div>
  )
}