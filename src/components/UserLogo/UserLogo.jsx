import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';
import { selectUserAvatar, selectUserName } from 'redux/selectors';
import {
  StyledAvatar,
  StyledUserName,
  UserLogoWrapper,
} from './UserLogo.styled';

export function UserLogo() {
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  const userLogoRef = useRef();

  const [isOpen, setOpen] = useState(false);

  function popoverTogler(e) {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const onCloseModal = (e) => {
      if (
        !e.target.closest('.modal') &&
        !e.target.closest("#simple-popover") &&
        !e.target.closest(".user") &&
        !e.target.classList.contains('.modal') &&
        !e.target.classList.contains('.user')
      ) {
        setOpen(false);
      };
      return;
    }
    window.addEventListener('click', onCloseModal);

    return () => {
      window.removeEventListener('click', onCloseModal);;
    };
  }, [])
  

  return (
    <>
      <UserLogoWrapper ref={userLogoRef} onClick={popoverTogler} className='user'>
        <StyledAvatar alt={userName} src={userAvatar} />
        <StyledUserName>{userName}</StyledUserName>
      </UserLogoWrapper>
      <UserLogoModal
        userLogoRef={userLogoRef}
        popoverTogler={popoverTogler}
        isOpen={isOpen}
      />
    </>
  );
}
