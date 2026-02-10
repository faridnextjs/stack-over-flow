const ProfileID = async ({
  params,
}: {
  params: Promise<{ profileID: string }>;
}) => {
  const { profileID } = await params;
  console.log("profile ID ", profileID);
  return <main>ProfileID</main>;
};
export default ProfileID;
