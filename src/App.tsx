import { useFormik } from 'formik'
import './App.css'

function App() {
  const formik = useFormik({
    initialValues: {
      name: " ",
      email: "",
      telefone: "",
    },
    onSubmit: (value) => {
      console.log(value);
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <fieldset>
          <label>Nome: </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            id="nome"
          />
        </fieldset>

        <fieldset>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
          />

        </fieldset>

        <fieldset>
          <label>Telefone: </label>
          <input
            type="text"
            name="telefone"
            value={formik.values.telefone}
            onChange={formik.handleChange}
            id="telefone"
          />

        </fieldset>


        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App

