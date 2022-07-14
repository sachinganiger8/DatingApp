namespace API.Entities
{
    public class Connection
    {
        public Connection()
        {
        }

        public Connection(string connectioId, string username)
        {
            ConnectionId = connectioId;
            Username = username;
        }

        public string ConnectionId { get; set; }
        public string Username { get; set; }
    }
}