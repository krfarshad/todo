import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/store";
import { useAddTodo } from "../../hooks/useAddTodo";
import { addTodo } from "../../store/todoSlice";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

const todoSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be less than 50 characters"),
});

function zodValidate<T extends z.ZodTypeAny>(schema: T) {
  return (values: z.infer<T>): FormikErrors<z.infer<T>> => {
    const result = schema.safeParse(values);
    if (result.success) return {};
    return result.error.flatten().fieldErrors as FormikErrors<z.infer<T>>;
  };
}

export default function TodoForm() {
  const qc = useQueryClient();
  const { mutateAsync } = useAddTodo();
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.items);
  const userId = todos[0]?.userId;

  const addTodoHandler = async (values: z.infer<typeof todoSchema>) => {
    const { title } = values;
    const res = await mutateAsync({
      values: { todo: title, userId },
    });
    dispatch(addTodo({ ...res, id: uuidv4() }));
  };

  return (
    <Formik
      initialValues={{ title: "" }}
      validate={zodValidate(todoSchema)}
      onSubmit={async (values, helpers) => {
        await addTodoHandler(values);
        helpers.resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex gap-2 mb-4 flex-wrap">
          <div className="flex-1">
            <Field as={Input} name="title" placeholder="New todo" />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-xs mt-2 w-full"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className=" cursor-pointer"
          >
            Add
          </Button>
        </Form>
      )}
    </Formik>
  );
}
