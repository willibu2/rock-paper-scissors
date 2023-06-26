import React, { useState, useContext } from 'react';

const rulesContext = React.createContext({
  showModal: '',
  showModalHandler: () => {},
  closeModalHandler: () => {},
});

export const RulesContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const data = {
    showModal,
    showModalHandler,
    closeModalHandler,
  };

  return <rulesContext.Provider value={data}>{children}</rulesContext.Provider>;
};

export const useRulesContext = () => {
  return useContext(rulesContext);
};
