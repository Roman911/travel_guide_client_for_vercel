import React from 'react'
import dynamic from 'next/dynamic'
import { Controller, useFormContext } from 'react-hook-form'

const Editor = dynamic(
  async () => {
    const mod = await import('react-draft-wysiwyg')
    return mod.Editor
  },
  { ssr: false }
)

interface IProps {
  toolbar: {
    inline: { inDropdown: boolean }
    list: { inDropdown: boolean }
    textAlign: { inDropdown: boolean }
    link: { inDropdown: boolean }
    history: { inDropdown: boolean }
    image: {
      uploadCallback: (file: File) => void
    }
  }
}

const EditorComponent: React.FC<IProps> = ({ toolbar }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name="editor"
      render={({ field: { onChange, value } }) => (
        <Editor
          editorState={value}
          onEditorStateChange={onChange}
          toolbar={toolbar}
        />
      )}
    />
  )
}

export default EditorComponent
