import React from "react"
import { Step, StepButton, StepLabel, Stepper, styled } from '@mui/material'

type Props = {
  steps: {
    label: string
  }[]
}

export const MyStepper: React.FC<Props> = ({ steps }) => {
  const [activeStep, setActiveStep] = React.useState(0)
  const handleStep = (step: number) => () => setActiveStep(step)

  const QontoStepIconRoot = styled('div')(({ theme, ownerState }: { theme?: any, ownerState: any }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    marginLeft: '8px',
    ...(ownerState.active && {
      color: '#ed2945',
    }),
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  const QontoStepIcon = (props: { active: boolean, className: string, completed: boolean }) => {
    const { active, completed, className } = props

    return <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed || <div className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  }

  return <Stepper activeStep={activeStep} nonLinear orientation="vertical" sx={{ padding: 2 }} >
    {
      steps.map((i, index) => {
        return <Step key={index} >
          <StepButton sx={{ fontSize: '12px', padding: '0 8px' }} onClick={handleStep(index)}>
            <StepLabel StepIconComponent={QontoStepIcon} sx={{ padding: '4px 0' }}>
              {i.label}
            </StepLabel>
          </StepButton>
        </Step>
      })
    }
  </Stepper>
}