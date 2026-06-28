import {
  CreateView,
  CreateViewHeader,
} from "@/components/refine-ui/views/create-view";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Subject } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { HttpError } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { Save } from "lucide-react";
import { z } from "zod";

const subjectFormSchema = z.object({
  code: z.string().trim().min(1, "Code is required"),
  name: z.string().trim().min(1, "Name is required"),
  department: z.string().trim().min(1, "Department is required"),
  description: z.string().trim().min(1, "Description is required"),
});

type SubjectFormValues = z.infer<typeof subjectFormSchema>;

const SubjectCreate = () => {
  const form = useForm<Subject, HttpError, SubjectFormValues>({
    resolver: zodResolver(subjectFormSchema),
    defaultValues: {
      code: "",
      name: "",
      department: "",
      description: "",
    },
    refineCoreProps: {
      resource: "subject",
      action: "create",
      redirect: "list",
    },
  });

  const { saveButtonProps } = form;

  return (
    <CreateView className="gap-6">
      <CreateViewHeader title="Create Subject" />

      <Form {...form}>
        <form className="grid max-w-2xl gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="CS101" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input placeholder="CS" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Introduction to Computer Science" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea className="min-h-28" placeholder="Course overview" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full sm:w-fit"
            type="button"
            disabled={saveButtonProps.disabled}
            onClick={saveButtonProps.onClick}
          >
            <Save />
            Save Subject
          </Button>
        </form>
      </Form>
    </CreateView>
  );
};

export default SubjectCreate;
