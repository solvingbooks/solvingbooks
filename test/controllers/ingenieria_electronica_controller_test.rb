require 'test_helper'

class IngenieriaElectronicaControllerTest < ActionController::TestCase
  test "should get circuitos_electricos" do
    get :circuitos_electricos
    assert_response :success
  end

end
