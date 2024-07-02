import s from "./FormsControls.module.css"

export const titleInput = ({ ...props }) => {
   return (
      <input  {...props} className={s.form} />
   )
}