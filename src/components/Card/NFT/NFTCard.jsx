function NFTCard() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
      <div className="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
          <h1 className="text-2xl font-black text-white">
            the quick brown fox jumps over the lazy dog
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
