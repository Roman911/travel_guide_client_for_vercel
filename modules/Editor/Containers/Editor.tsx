import React from 'react'
import { uploadFileAPI } from '../../../store/reducers/uloadFileSlice'
import { EditorComponent } from '../Components'

const Editor: React.FC = () => {
  const [createFile] = uploadFileAPI.useCreateFileMutation()
  const uploadImageCallBack = async (file: File) => {
    const data = await createFile({ url: '/create-post-content', file })

    return {
      data: {
        //@ts-ignore
        link: `${process.env.NEXT_APP_HOST_API}images/${data.data.link}`,
      },
    }
  }

  const toolbar = {
    inline: { inDropdown: true },
    list: { inDropdown: true },
    textAlign: { inDropdown: true },
    link: { inDropdown: true },
    history: { inDropdown: true },
    image: {
      uploadCallback: uploadImageCallBack,
    },
  }

  return <EditorComponent toolbar={toolbar} />
}

export default Editor
