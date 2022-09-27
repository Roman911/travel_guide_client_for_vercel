import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useActions, useTypedSelector } from '../../../../hooks'
import { CreatePostComponent } from '../Components'
import { types } from '../../../../types/post'

interface IProps {
  disabled: boolean
  setFile: (arg: string | File) => void
}

const CreatePost: React.FC<IProps> = ({ disabled, setFile }) => {
  const { setValue } = useFormContext()
  const {
    createPost,
    uploadFile: { previewImage },
    user: { userData },
  } = useTypedSelector(state => state)
  const { setTypeMaterial } = useActions()

  React.useEffect(() => {
    setValue(types.TYPE_MATERIAL, createPost.type_material)
    if (createPost.title) {
      setValue(types.TITLE, createPost.title)
      setValue(types.SMALL_TEXT, createPost.small_text)
    }
  }, [createPost])

  return (
    <CreatePostComponent
      disabled={disabled}
      previewImage={previewImage}
      typeMaterial={createPost.type_material}
      setFile={setFile}
      setTypeMaterial={setTypeMaterial}
      userData={userData}
    />
  )
}

export default CreatePost
