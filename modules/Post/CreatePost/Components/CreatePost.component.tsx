import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Share } from '@mui/icons-material'
import { Avatar, Regions, UploadFile } from '../../../'
import { MyController } from '../../../../Components'
import { types } from '../../../../types/post'
import { typesMaterial } from '../config'
import { IUserData } from '../../../../types/user'

import { Editor } from '../../../'

interface IProps {
  disabled: boolean
  previewImage?: string
  typeMaterial: { label: string; id: string } | null
  setTypeMaterial: (arg: { label: string; id: string } | null) => void
  setFile: (arg: string | File) => void
  userData?: IUserData | null
}

const CreatePostComponent: React.FC<IProps> = ({
  disabled,
  previewImage,
  typeMaterial,
  setTypeMaterial,
  setFile,
  userData,
}) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  return (
    <Container maxWidth="xl" sx={{ marginTop: '73px' }}>
      <Typography variant="h2">РЕДАГУВАННЯ</Typography>
      <Paper elevation={3}>
        <Grid container paddingTop={3} paddingLeft={3} paddingRight={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Stack spacing={2}>
              <Controller
                name={types.TYPE_MATERIAL}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Autocomplete
                    size="small"
                    disablePortal
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    options={typesMaterial}
                    onChange={(event, item) => {
                      setTypeMaterial(item)
                      onChange(item)
                    }}
                    value={value}
                    renderInput={params => (
                      <TextField {...params} label="Тип матеріалу" />
                    )}
                  />
                )}
              />
              {typeMaterial?.id === 'post' && (
                <Button variant="contained" color="secondary">
                  Додати локацію
                </Button>
              )}
              <MyController
                type={types.TITLE}
                label="Заголовок"
                multiline={false}
                rows={1}
                size="small"
              />
              <UploadFile
                name="Обрати фото"
                uploadButton={true}
                setFile={setFile}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  style={{
                    width: '518px',
                    maxWidth: '100%',
                    height: `${(9 / 16) * 518}px`,
                  }}
                />
              )}
              {(typeMaterial?.id === 'trip' ||
                typeMaterial?.id === 'myTrip') && <Regions isMap={false} />}
              <MyController
                type={types.LINK}
                label="Посилання на оригінал"
                multiline={false}
                rows={1}
                size="small"
              />
              {typeMaterial?.id === 'post' && (
                <MyController
                  type={types.WORK_TIME}
                  label="Час роботи"
                  multiline={false}
                  rows={1}
                  size="small"
                />
              )}
              {typeMaterial?.id !== 'post' && (
                <MyController
                  type={types.TAGS}
                  label="Теги"
                  multiline={true}
                  rows={4}
                  size="small"
                  helperText="Теги водьте розділяючи комою"
                />
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ maxWidth: 345, marginLeft: 'auto' }}>
              <CardHeader
                avatar={
                  <Avatar
                    size={40}
                    userData={{
                      name: userData?.name || 'Anonimus',
                      avatar: userData?.avatar,
                    }}
                  />
                }
                title={userData?.name}
                subheader={'щойно'}
              />
              <CardActionArea sx={{ position: 'relative' }}>
                {previewImage ? (
                  <CardMedia
                    component="img"
                    height="194"
                    image={previewImage}
                    alt="Paella dish"
                  />
                ) : (
                  <Box
                    sx={{
                      width: '100%',
                      height: '194px',
                      backgroundColor: '#e6e6e6',
                    }}
                  />
                )}
                <CardContent sx={{ paddingBottom: '8px' }}>
                  {watch(types.TITLE) ? (
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{
                        margin: '-8px 0 8px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {watch(types.TITLE)}
                    </Typography>
                  ) : (
                    <Box
                      sx={{
                        width: '100%',
                        height: '32px',
                        backgroundColor: '#e6e6e6',
                      }}
                    />
                  )}
                  {watch(types.SMALL_TEXT) ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: '4',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {watch(types.SMALL_TEXT)}
                    </Typography>
                  ) : (
                    <>
                      <Box
                        sx={{
                          width: '100%',
                          height: '15px',
                          backgroundColor: '#e6e6e6',
                          marginBottom: 1,
                        }}
                      />
                      <Box
                        sx={{
                          width: '60%',
                          height: '15px',
                          backgroundColor: '#e6e6e6',
                          marginBottom: 1,
                        }}
                      />
                      <Box
                        sx={{
                          width: '80%',
                          height: '15px',
                          backgroundColor: '#e6e6e6',
                        }}
                      />
                    </>
                  )}
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing sx={{ paddingTop: 0 }}>
                <IconButton
                  aria-label="share"
                  sx={{ marginLeft: 'auto', color: 'gray' }}
                >
                  <Share />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Stack spacing={2} padding={2}>
          <MyController
            type={types.SMALL_TEXT}
            label="Короткий опис"
            multiline={true}
            rows={4}
            size="small"
          />
          <MyController
            type={types.HOW_TO_GET_THERE}
            label="Як дістатися"
            multiline={true}
            rows={4}
            size="small"
          />
          {typeMaterial?.id === 'post' && (
            <MyController
              type={types.TAGS}
              label="Теги"
              multiline={false}
              rows={1}
            />
          )}
          {/*<QuillComponent />*/}
          <Editor />
          <Box
            display="flex"
            sx={{ alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ marginLeft: '10px', width: '180px' }}
              color="secondary"
              disabled={disabled}
            >
              Зберегти
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  )
}

export default CreatePostComponent
