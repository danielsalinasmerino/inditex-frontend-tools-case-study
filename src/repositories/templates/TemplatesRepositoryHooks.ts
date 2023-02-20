import { useQuery, QueryOptions } from "react-query";
import { Templates } from "../../models/templates";
import { useTemplatesRepository } from "./../../hooks/useTemplatesRepository";

export const useFetchTemplates = (options?: QueryOptions<Templates>) => {
  const { templatesRepository } = useTemplatesRepository();

  const { data, ...rest } = useQuery(
    ["templates"],
    async () => {
      return await templatesRepository.fetchTemplates();
    },
    options
  );

  return { ...rest, templates: data || [] };
};
