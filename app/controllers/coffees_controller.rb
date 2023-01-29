class CoffeesController < ApplicationController

   
    def index 
        render json: Coffee.all, status: 200
    end 
    
    def show 
        coffee = find_coffee
        if coffee.present?
            render json: coffee, status: 200
        else 
            render json: {error: "Coffee not found"}, status: 404
        end
    end 

    def create 
        coffee = Coffee.create!(coffee_params)
        render json: nft, status: 201
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: 406
    end 

   
    private 

    def coffee_params 
        params.permit(:blend_name, :variety, :origin, :notes)
    end 

    def find_coffee 
        Coffee.find_by(id: params[:id])
    end 

end