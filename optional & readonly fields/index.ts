type Moderator = {
    username: string;
    email?: string; // optional field
    readonly id: number; // can't be changed
};

const user2: Moderator = {
    username: "editing",
    id: 1,
};

// user2.id = 2;  // error: readonly property
