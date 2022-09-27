interface IObj {
  borderTopLeftRadius?: string
  borderBottomLeftRadius?: string
  borderTopRightRadius?: string
  borderBottomRightRadius?: string
}

export const useStyleBorderRadius = (
  allAvatars: boolean,
  avatarsLength: number,
  index: number
) => {
  let st: IObj = {}
  if (index === 0) {
    st.borderTopLeftRadius = '8px'
    if (!allAvatars) {
      st.borderBottomLeftRadius = '8px'
    }
  }
  if (avatarsLength <= 5 && avatarsLength - 1 === index) {
    st.borderTopRightRadius = '8px'
    st.borderBottomRightRadius = '8px'
  }
  if (avatarsLength > 5 && index === 4) {
    st.borderTopRightRadius = '8px'
    if (!allAvatars) {
      st.borderBottomRightRadius = '8px'
    }
  }
  if (allAvatars) {
    if (avatarsLength - 1 === index) {
      st.borderBottomRightRadius = '8px'
    }
    const modul = avatarsLength % 5
    if (modul === 0 && avatarsLength - 5 === index) {
      st.borderBottomLeftRadius = '8px'
    }
    if (modul !== 0 && avatarsLength - modul === index) {
      st.borderBottomLeftRadius = '8px'
    }
  }
  return st
}
