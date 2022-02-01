class AddUserAttributes < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :username, :string
    add_column :users, :password, :string
    add_column :users, :email, :string
  end
end
