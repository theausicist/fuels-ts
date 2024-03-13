import { DocSnippetProjectsEnum } from '../../../test/fixtures/forc-projects';
import { createAndDeployContractFromProject } from '../../utils';

test('logs out custom require messages for error enums when tx reverts', async () => {
  const contract = await createAndDeployContractFromProject(DocSnippetProjectsEnum.REVERT_ERRORS);

  // #region revert-errors-4
  expect(() => contract.functions.test_function_with_custom_error().call()).rejects.toThrow(
    'The script reverted with reason RequireFailed. (Reason: "InvalidInput")'
  );
  // #endregion revert-errors-4
});

test('logs out a generic error message for require statements with a simple string message', async () => {
  const contract = await createAndDeployContractFromProject(DocSnippetProjectsEnum.REVERT_ERRORS);

  // #region revert-errors-5
  expect(() => contract.functions.test_function().call()).rejects.toThrow(
    'String slices can not be decoded from logs. Convert the slice to `str[N]` with `__to_str_array`'
  );
  // #endregion revert-errors-5
});