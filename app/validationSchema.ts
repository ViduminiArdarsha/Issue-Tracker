import {z} from 'zod'

const schema = z.object({
    title: z.string().min(1,'Title is Required').max(255),
    description : z.string().min(1,'Description is Required')
});

export default schema;