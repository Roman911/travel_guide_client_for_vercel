import React from 'react'
import NextLink from 'next/link'
import { Controller, useFormContext } from 'react-hook-form'
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import { Avatar } from '../../../'
import { useColors } from '../../../../hooks'
import type { IUserData } from '../../../../types'

type Props = {
  isAnswer: boolean
  handleCloseOpenAnswer?: () => void
  userData: IUserData | null
}

const CreateCommentComponent: React.FC<Props> = ({
  isAnswer,
  handleCloseOpenAnswer,
  userData,
}) => {
  const { control } = useFormContext()
  const { darkGray } = useColors()

  return (
    <Box>
      {userData ? (
        <Box sx={{ position: 'relative' }}>
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ border: '2px', width: '100%', paddingBottom: '4px' }}
                id="standard-multiline-static"
                multiline
                placeholder="Ваш коментар..."
                InputProps={{
                  sx: {
                    paddingLeft: '76px',
                    paddingTop: '29px',
                    paddingBottom: '28px',
                  },
                }}
              />
            )}
          />
          <Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
            <Avatar size={40} userData={userData} />
          </Box>
        </Box>
      ) : (
        <Stack
          direction="row"
          spacing={2}
          alignItems="flex-start"
          sx={{ border: '1px solid rgba(0,0,0,.1)', padding: '15px 20px' }}
        >
          <Avatar size={40} />
          <Typography variant="subtitle2" marginTop="9px">
            Привіт! Щоб коментувати, потрібно
            <NextLink href="/login">
              <Link underline="none" sx={{ color: '#cb2c3b' }}>
                увійти
              </Link>
            </NextLink>
          </Typography>
        </Stack>
      )}
      <Stack direction="row" justifyContent="flex-end" marginTop={1}>
        {isAnswer && (
          <Button
            onClick={handleCloseOpenAnswer}
            sx={{
              fontSize: '11px',
              color: '#303335',
              transition: '300ms',
              ':hover': { opacity: 0.6 },
            }}
          >
            Скасувати
          </Button>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{ marginLeft: '10px', width: '140px' }}
          color="secondary"
          disabled={!userData}
        >
          Коментувати
        </Button>
      </Stack>
    </Box>
  )
}

export default CreateCommentComponent
