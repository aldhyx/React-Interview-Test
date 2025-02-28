import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1).max(39),
});

const SearchForm = (props: { isFetching: boolean }) => {
  const { username } = useSearch({ from: "/" });
  const navigate = useNavigate({ from: "/" });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: username || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    navigate({ to: "/", search: { username: values.username } });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormControl>
                <Input placeholder="Enter a username..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {props.isFetching && <Loader2 className="animate-spin" />}
          Search on Github
        </Button>
      </form>
    </Form>
  );
};

export default SearchForm;
