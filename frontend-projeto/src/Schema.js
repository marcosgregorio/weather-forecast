import * as Yup from 'yup'

export default Yup.object().shape({
    cidade: Yup.string().required(),
})