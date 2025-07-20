import React from 'react'
import { Text } from '../../../components/atoms'
import {
  Modal,
  ModalBackgroundContainer,
  ModalContentContainer,
  UnderConstructionImage,
} from './styles'
import UnderConstruction from '../../../../assets/UnderConstruction.png'

export const UnderConstructionModal = ({ visible, onClose, type }) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <UnderConstructionImage source={UnderConstruction} />
          <Text mt={24} align="center" color="yellow" size={24} fontFamily="bold">
            Em Construção
          </Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  )
}