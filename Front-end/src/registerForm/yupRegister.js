import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("O título é obrigatório")
    .min(2, "O título deve ter pelo menos 2 caracteres"),
  autor: Yup.string()
    .required("O autor é obrigatório")
    .min(2, "O nome do autor deve ter pelo menos 2 caracteres"),
  value: Yup.number()
    .required("O valor é obrigatório")
    .positive("O valor deve ser positivo"),
  description: Yup.string().max(
    200,
    "A descrição não pode ter mais de 200 caracteres"
  ),
  genero: Yup.string().required("O gênero é obrigatório"),
});

export { validationSchema };
