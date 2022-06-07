using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetUsersByIdAsync(int id);
        Task<AppUser> GetUsersByUsernameAsync(string username);
    }
}
