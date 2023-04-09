import { 
  AlertDialog, 
  AlertDialogBody, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogOverlay, 
  } from "@chakra-ui/react"; 
  import { useAlertContext } from "./components/ContextApi"; 
  import { useRef } from "react"; 
  
  /** 
 * This is a global component that uses context to display a global alert message. 
 */ 
function Alert() { 
  const { isOpen, type, message, onClose } = useAlertContext(); 
  const cancelRef = useRef(); 
  const isSuccess = type === "success" 
  
  return ( 
    <AlertDialog 
      isOpen={isOpen} 
      leastDestructiveRef={cancelRef} 
      onClose={onClose}
    > 
      <AlertDialogOverlay > 
        <AlertDialogContent maxW={['250px','700px']} h={['75px','150px']} mt={['360px','250px']} backgroundColor={isSuccess ? 'second.500' : '#FF8A65' } color='brand.900'> 
          <AlertDialogHeader fontFamily='MarkaziText' fontWeight='bold' fontSize={['18px','40px']} p={['0']} textAlign={['center']} color='brand.900'> 
            {isSuccess ? 'All good!' : 'Oops!'} 
          </AlertDialogHeader> 
          <AlertDialogBody fontFamily='MarkaziText' fontWeight='normal' fontSize={['14px','20px']} textAlign={['center']}>{message}</AlertDialogBody> 
        </AlertDialogContent> 
      </AlertDialogOverlay> 
    </AlertDialog> 
  ); 
} 
  
export default Alert;