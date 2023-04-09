import React from 'react'
import {Box, Container, Heading, SimpleGrid, Button, Input, FormControl, FormLabel, FormErrorMessage, Select, HStack, Stack, Image} from '@chakra-ui/react'
import * as Yup from 'yup'
import {Form, Formik,Field} from 'formik'
import useSubmit from "../Hook/useSubmit"
import {useAlertContext, useOptionContext} from "./ContextApi";
const FormikControl = (props) => {
  const {control, ...rest} = props
  switch(control) {
    case 'chakrainput':
    return <ChakraInput {...rest}/>
    case 'chakraselect':
    return <ChakraSelect {...rest}/>
    case 'ChakraDate':
    return <ChakraDate {...rest}/>
    case 'chakrainputnumber':
    return <ChakraInputNumber {...rest}/>
    default:
      return null
  }
}

const ChakraInput = (props) => {
  const {lable, name, color,mb, ...rest} = props
return (
  <Field name={name}>
    {
      ({field, form}) => {
        return <FormControl isInvalid= {form.errors[name] && form.touched[name]} mb='4px'>
          <FormLabel htmlFor={name} color={color}>{lable}</FormLabel>
          <Input id={name} {...rest} {...field} bg='second.500' w={['330px','350px']} />
          <FormErrorMessage mb={mb}>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      }
    }
  </Field>
)
}
const ChakraInputNumber = (props) => {
  const {lable, name, color,mb, ...rest} = props
return (
  <Field name={name}>
    {
      ({field, form}) => {
        return <FormControl isInvalid= {form.errors[name] && form.touched[name]} mb='4px'>
          <FormLabel htmlFor={name} color={color}>{lable}</FormLabel>
          <Input id={name} {...rest} {...field}   bg='second.500' w={['330px','350px']} />
          <FormErrorMessage mb={mb}>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      }
    }
  </Field>
)
}
const ChakraSelect = (props) => {
  const {ops} = useOptionContext()
  const dropdownContainer = [
    {key: '', value:'Time'},
    {key: `option1`, value:`${ops.calltoaction.state.op1}`},
    {key: `option2`, value:`${ops.calltoaction.state.op2}`},
    {key: `option3`, value:`${ops.calltoaction.state.op3}`},
  ]
  const dropdownOption = [
    {key: '', value:'Occasion'},
    {key: `option1`, value:`${ops.calltooption.occasion1}`},
    {key: `option2`, value:`${ops.calltooption.occasion2}`},
    {key: `option3`, value:`${ops.calltooption.occasion3}`},
  ]
  const {lable, name, options, color, mb, ...rest} = props
return (
  <Field name={name} >
    {
      ({field, form}) => {
        return <FormControl isInvalid= {form.errors[name] && form.touched[name]} color='brand.500'>
          <FormLabel htmlFor={name} color={color}>{lable}</FormLabel>
          <Select id={name} {...rest} {...field} bg='second.500' w={['330px','350px']} >
          {name === 'type' ?
            dropdownContainer.map(option => {
              return  (
                <option style={{color:'#edefee', background:'#333333'}} key={option.value} value={option.value}>{option.value}</option>
                )
            }) :
            dropdownOption.map(option => {
              return  (
                <option style={{color:'#edefee', background:'#333333'}} key={option.value} value={option.value}>{option.value}</option>
                )
            })
          }
          </Select>
          <FormErrorMessage  mb={mb}>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      }
    }
  </Field>
)
}
const ChakraDate = (props) => {
  const {ops} = useOptionContext()
  const {lable, name, color,mb,...rest} = props
return (
  <Field name={name}>
    {
      ({field, form}) => {
        return <FormControl isInvalid= {form.errors[name] && form.touched[name]} mb='4px'>
          <FormLabel htmlFor={name} color={color}>{lable}</FormLabel>
          <Input bg='second.500' id={name} {...rest} {...field} onBlur={(e)=> ops.calltoaction.updateTimes({date: e.target.value})}  w={['330px','350px']}/>
          <FormErrorMessage mb={mb}>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      }
    }
  </Field>
)
}
export default function ContactMeSection() {
const {isLoading, response, submit} = useSubmit();
const { onOpen } = useAlertContext();
const initialValues = {
  name:'',
  email:'',
  type:'',
  date:'',
  gutes:0,
  occasion:'',
}
const onSubmit = (values,onSubmitProps) => {
  console.log('Form Data', values)
  submit('#', values); 
  onOpen(response.type, response.message);
  if (response.type === 'success') { 
    onSubmitProps.resetForm()
  }
}
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Verfiy an email').required('Required'),
  type: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
  gutes:Yup.number().required('Required').min(2,'Excuse Me, Reserve A Table For A Least Two Person').max(10,'Excuse Me, Reserve A Table For Up To Ten Person'),
  occasion: Yup.string().required('Required'),
})
return (
    <Container  as='section' maxW='100%' bg='transparent' minH='831px' mb={['16px']}pl={['0']}>
    <Container  as='div' minW={['360px','891px']} minH='702px' bg='second.400' borderRadius={['0','16px']} >
      <Box>
    <Heading  as='h2' margin='0 auto 20px'  color='brand.800' fontFamily='MarkaziText' fontWeight='normal' fontSize='40px' p='20px 20px 10px 0'>
    Reservation
    </Heading>
      </Box>
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg:1 }}
      p='10px 0'
      textAlign='center'
      >
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {
        formik => {
          return (
            <Form>
              <Stack direction={{ base: "column", md: "row" }} justifyContent='space-between'>
                <Box textAlign={['left', 'left']}>
                <FormikControl control='chakrainput' type='text' lable='Name' name='name' color='brand.800' mb='8px'/>
                <FormikControl control='chakrainput' type='email' lable='Email' name='email' color='brand.800' mb='8px'/>
                <FormikControl control='ChakraDate' type='date' lable='Choose Date:' name='date' color='brand.800' fontFamily='Karla' fontSize='20' fontWeight='medium' mb='8px'/>
                </Box>
                <Box textAlign={['left', 'left']}>
                <FormikControl type='select' control='chakraselect' lable='Choose Time' name='type' color='brand.800' fontFamily='Karla' fontSize='20' fontWeight='medium' mb='8px'/>
                <FormikControl control='chakrainputnumber' type='number' lable='Number Of Gutes' name='gutes' color='brand.800' mb='8px'/>
                <FormikControl control='chakraselect' type='select' lable='Select Occasion' name='occasion' color='brand.800' fontFamily='Karla' fontSize='20' fontWeight='medium' mb='8px'/>
                </Box >
              </Stack>
              <HStack minW={['full','861px']} maxH='265px' justifyContent={['center','space-between']} mt='40px'>
              <Image maxH={['90px','265px']} maxW={['90px','265px']} src={require("../img/image1.png")} alt="logo"/>
              <Image maxH={['90px','265px']} maxW={['90px','265px']} src={require("../img/image2.png")} alt="logo"/>
              <Image maxH={['90px','265px']} maxW={['90px','265px']} src={require("../img/image3.png")} alt="logo"/>
              </HStack>
              {!formik.isValid ?(
                <Button w='180.56px' h='50px' fontFamily='Roboto' fontWeight='normal' fontSize='18px' color='second.400' type='submit' disabled={!formik.isValid} mt={['20px' ,'40px']}    isLoading={isLoading}  >Submit</Button>
                ):(
                  <Button w='180.56px' h='50px' fontFamily='Roboto' fontWeight='normal' fontSize='18px'  type='submit' color='second.400' bg='brand.800'  mt={['20px' ,'40px']}  isLoading={isLoading} >Submit</Button>
                ) }
            </Form>
          )
        }
      }
    </Formik>
    </SimpleGrid>
    </Container >
    </Container>
  )
}


