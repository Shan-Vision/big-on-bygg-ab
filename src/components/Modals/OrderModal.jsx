import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ButtonClose,
  Overlay,
  Title,
  StyledForm,
  InputBox,
} from './OrderModal.styled';
import { IoMdClose } from 'react-icons/io';
import { Formik } from 'formik';
import * as yup from 'yup';
const modalRoot = document.getElementById('order-modal-root');

const orderSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(12)
    .matches(/^\S+$/)
    .required('please, enter your name'),
  phone: yup.number().positive('must be greater than 0').required(),
  email: yup
    .string()
    .email('invalid email address format')
    .min(10)
    .max(63)
    .matches(
      /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]*\w{3,}@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{1,63})$/i
    )
    .required('please, enter your email'),
});

const OrderModal = ({ onModalClose }) => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    comments: '',
    isAccepted: false,
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  return createPortal(
    <div>
      <Overlay onClick={handleBackdropClick}>
        <Title>OrderModal</Title>
        <ButtonClose type="button">
          <IoMdClose color="inherit" onClick={() => onModalClose()} />
        </ButtonClose>
        <Formik initialValues={initialValues} validationSchema={orderSchema}>
          {({ setFieldValue }) => (
            <StyledForm autoComplete="off">
              <InputBox></InputBox>
            </StyledForm>
          )}
        </Formik>
      </Overlay>
    </div>,
    modalRoot
  );
};

export default OrderModal;
