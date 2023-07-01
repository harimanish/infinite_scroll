import React, { useEffect, useState } from "react";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";

interface User {
    name: {
        first: string;
        last: string;
    };
    location: {
        city: string;
    };
    picture: {
        thumbnail: string;
    };
}

const InfiniteScrollList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://randomuser.me/api/?results=10&page=${page}`
            );
            const data = await response.json();
            const newUsers = data.results.map((user: any) => ({
                name: {
                    first: user.name.first,
                    last: user.name.last,
                },
                location: {
                    city: user.location.city,
                },
                picture: {
                    thumbnail: user.picture.thumbnail,
                },
            }));
            setUsers((prevUsers) => [...prevUsers, ...newUsers]);
            setPage((prevPage) => prevPage + 1);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setLoading(false);
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        ) {
            return;
        }
        fetchUsers();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex justify-center">
            <Card className="w-96">
                <List>
                    {users.map(({ name, location, picture }, index) => (
                        <ListItem key={index}>
                            <ListItemPrefix>
                                <Avatar
                                    variant="circular"
                                    alt="User Thumbnail"
                                    src={picture.thumbnail}
                                />
                            </ListItemPrefix>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    {`${name.first} ${name.last}`}
                                </Typography>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="font-normal"
                                >
                                    {location.city}
                                </Typography>
                            </div>
                        </ListItem>
                    ))}
                    {isLoading && (
                        <>
                            <ListItem>
                                <ListItemPrefix>
                                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                                </ListItemPrefix>
                                <div>
                                    <div className="h-4 w-32 mt-1 bg-gray-300 rounded" />
                                    <div className="h-3 w-20 mt-1 bg-gray-300 rounded" />
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                                </ListItemPrefix>
                                <div>
                                    <div className="h-4 w-32 mt-1 bg-gray-300 rounded" />
                                    <div className="h-3 w-20 mt-1 bg-gray-300 rounded" />
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                                </ListItemPrefix>
                                <div>
                                    <div className="h-4 w-32 mt-1 bg-gray-300 rounded" />
                                    <div className="h-3 w-20 mt-1 bg-gray-300 rounded" />
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                                </ListItemPrefix>
                                <div>
                                    <div className="h-4 w-32 mt-1 bg-gray-300 rounded" />
                                    <div className="h-3 w-20 mt-1 bg-gray-300 rounded" />
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                                </ListItemPrefix>
                                <div>
                                    <div className="h-4 w-32 mt-1 bg-gray-300 rounded" />
                                    <div className="h-3 w-20 mt-1 bg-gray-300 rounded" />
                                </div>
                            </ListItem>
                        </>
                    )}
                </List>
            </Card>
        </div>
    );
};

export default InfiniteScrollList;
