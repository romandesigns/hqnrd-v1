import { Button } from "antd";

export function ActionBtns({
  authorId,
  userId,
}: Readonly<{ authorId: string; userId: string }>) {
  return (
    <>
      <Button
        className="!flex items-center justify-center rounded-md !border-green-400  shadow-md"
        onClick={() => console.log("Start")}
      >
        <span className="text-green-400">Start</span>
      </Button>
      <Button
        className="!flex items-center justify-center rounded-md !border-blue-400  shadow-md"
        onClick={() => console.log("Complete")}
      >
        <span className="text-blue-400">Complete</span>
      </Button>

      <Button
        className="!flex items-center justify-center rounded-md  !border-orange-400  shadow-md"
        onClick={() => console.log("Cancel")}
      >
        <span className="text-orange-400">Cancel</span>
      </Button>
      <Button
        className="!flex items-center justify-center rounded-md  !border-purple-400  shadow-md"
        onClick={() => console.log("Delete")}
      >
        <span className="text-purple-400">Backlog</span>
      </Button>
      <Button
        className="!flex items-center justify-center rounded-md  !border-red-400  shadow-md"
        onClick={() => console.log("Delete")}
      >
        <span className="text-red-400">Delete</span>
      </Button>
      {authorId === userId && (
        <Button
          className="!flex items-center justify-center rounded-md  !border-neutral-400  shadow-md"
          onClick={() => console.log("Delete")}
        >
          <span className="text-neutral-400">Assigned</span>
        </Button>
      )}
    </>
  );
}
