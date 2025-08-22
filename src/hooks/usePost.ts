import { ApiResponse } from "@/utils/apiModel";
import {
  MutationFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export type Props<Tc, Tcres> = {
  queryKeys?: string[];
  callback: MutationFunction<ApiResponse<Tcres>, Tc>;
  onMutate?: MutationFunction;
};

const usePostAPI = <Tc = undefined, Tcres = undefined>(
  props: Props<Tc, Tcres>
) => {
  const { callback, queryKeys, onMutate } = props;

  const queryClient = useQueryClient();

  const result = useMutation<ApiResponse<Tcres>, unknown, Tc, unknown>({
    mutationFn: callback,
    onMutate: async () => onMutate && (await onMutate),
    onSuccess: () => {
      if (queryKeys) {
        queryKeys.forEach((query) => {
          queryClient.invalidateQueries({ queryKey: [query] });
        });
      }
    },
  });

  return { ...result };
};

export default usePostAPI;
