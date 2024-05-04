export default async function Write2() {

    //3. 서버기능만들었음
    async function handleSubmit(formData) {
        'use server';
        console.log(formData)
        console.log(formData.get('title'))
    }


    //2.폼만들었음
    return (
        <form action={handleSubmit}>
            <input type="text" name="title" />
            <button type="submit">Submit</button>
        </form>
    );
} 