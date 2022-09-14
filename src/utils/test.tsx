import Button from 'src/components/Button';
import Dialog from 'src/components/Dialog';

const Test = () => {
  return (
    <Dialog>
      <Dialog.Trigger>
        <Button variant="primary">test</Button>
      </Dialog.Trigger>
      <Dialog.Content title="test" description="test">
        <form>
          <Button variant="primary" type="submit">
            test
          </Button>
        </form>
      </Dialog.Content>
    </Dialog>
  );
};
