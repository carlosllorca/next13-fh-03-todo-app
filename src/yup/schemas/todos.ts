import * as yup from "yup";

export const todoPOST= yup.object({
    description:yup.string().required(),
    complete:yup.boolean().optional().default(false)
})
export const todoPUT= yup.object({
    description:yup.string().optional(),
    complete:yup.boolean().optional().default(false)
})
export const todoDelete= yup.object({
    complete:yup.boolean().optional().default(false)
})