
const FormContainer = () => {
  return (
    <>
        <section>
            <h2>Add Student</h2>
            <form id="student-form">
                <div>
                    <label for="studentName">Student Name:</label>
                    <input type="text" id="studentName" name="studentName"/>
                </div>
                <div>
                    <label for="program">Program:</label>
                    <input type="text" id="program" name="program"/>
                </div>
                <button type="submit">add student</button>
            </form>
        </section>
    </>
  )
}
export default FormContainer;
